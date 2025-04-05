export const shellScript = `#!/bin/bash

APP_DIR="app"
OUTPUT_FILE="app-structure.json"

# Function to scan directories and build JSON
generate_json() {
    local dir="$1"
    local indent="$2"
    local route_prefix="$3"
    local is_group="false"
    local json="["

    for entry in "$dir"/*; do
        local name=$(basename "$entry")
        local id=$(uuidgen)  # Generates a unique ID for each node

        if [[ -d "$entry" ]]; then
            # Check if it's a route group (enclosed in parentheses)
            if [[ "$name" =~ ^\$$.*\$$$ ]]; then
                is_group="true"
                local group_name="${name}"
                local group_json=$(generate_json "$entry" "$indent  " "$route_prefix")
                json+="{\\\"id\\\":\\\"$id\\\",\\\"type\\\":\\\"group\\\",\\\"name\\\":\\\"$group_name\\\",\\\"status\\\":\\\"group\\\",\\\"children\\\":$group_json},"
            else
                # Normal folder (could be a route)
                local new_route="$route_prefix/$name"
                local folder_json=$(generate_json "$entry" "$indent  " "$new_route")
                json+="{\\\"id\\\":\\\"$id\\\",\\\"type\\\":\\\"folder\\\",\\\"name\\\":\\\"$name\\\",\\\"children\\\":$folder_json},"
            fi
        elif [[ -f "$entry" ]]; then
            # Check if it's a page file (Next.js convention)
            if [[ "$name" == "page.js" || "$name" == "page.tsx" ]]; then
                json+="{\\\"id\\\":\\\"$id\\\",\\\"type\\\":\\\"page\\\",\\\"name\\\":\\\"$name\\\",\\\"route\\\":\\\"$route_prefix\\\",\\\"status\\\":\\\"active\\\"},"
            elif [[ "$name" == "layout.js" || "$name" == "layout.tsx" ]]; then
                json+="{\\\"id\\\":\\\"$id\\\",\\\"type\\\":\\\"file\\\",\\\"name\\\":\\\"$name\\\"},"
            fi
        fi
    done

    # Remove trailing comma and close JSON array
    json="\${json%,}]"
    echo "$json"
}

# Generate JSON for the app folder
json_output="{\\\"name\\\":\\\"Generated App Structure\\\",\\\"description\\\":\\\"Automatically generated Next.js app structure\\\",\\\"nodes\\\":[{\\\"id\\\":\\\"root\\\",\\\"type\\\":\\\"folder\\\",\\\"name\\\":\\\"app\\\",\\\"children\\\":$(generate_json "$APP_DIR" "  " "")}]}"

# Save to file
echo "$json_output" > "$OUTPUT_FILE"
echo "App structure saved to $OUTPUT_FILE"`;
