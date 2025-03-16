import React, { Children, ReactNode } from "react";

type ShowProps = {
  children: ReactNode;
};

type WhenProps = {
  isTrue: boolean;
  children: ReactNode;
};

type ElseProps = {
  render?: ReactNode;
  children?: ReactNode;
};

const Show: React.FC<ShowProps> & {
  When: React.FC<WhenProps>;
  Else: React.FC<ElseProps>;
} = ({ children }) => {
  const renderChild = (child: ReactNode): ReactNode | null => {
    if (!React.isValidElement(child)) return null;

    if ("isTrue" in child.props && child.props.isTrue === true) {
      return child.props.children;
    }

    if (!("isTrue" in child.props)) {
      return child.props.render ?? child.props.children;
    }

    return null;
  };

  return (
    (Children.map(children, renderChild) as ReactNode[]).find(Boolean) ?? null
  );
};

/**
 * Conditionally renders children when isTrue is true
 */
Show.When = ({ isTrue, children }: WhenProps) => (isTrue ? children : null);

/**
 * Renders either the render prop or children when shown
 */
Show.Else = ({ render, children }: ElseProps) => render ?? children;

export default Show;
