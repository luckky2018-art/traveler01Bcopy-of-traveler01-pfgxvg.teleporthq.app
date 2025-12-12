export type FooterLinksProps = {
  items: Array<{
    text: string;
    href?: string;
    isButton: boolean;
  }>;
};

export const FooterLinks = (props: FooterLinksProps) => {
  return (
    <div className="items-start box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
      {props.items.map((item, index) => {
        if (item.isButton) {
          return (
            <button
              key={index}
              className="text-white bg-transparent caret-transparent block text-center p-0 rounded-bl rounded-br rounded-tl rounded-tr"
            >
              {item.text}
            </button>
          );
        }
        return (
          <a
            key={index}
            href={item.href}
            className="text-white box-border caret-transparent block rounded-bl rounded-br rounded-tl rounded-tr"
          >
            {item.text}
          </a>
        );
      })}
    </div>
  );
};
