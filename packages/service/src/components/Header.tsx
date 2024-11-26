interface BarButtonItem {
  renderIcon: (options: { className: string }) => JSX.Element;
  onClick: () => void;
}

interface HeaderProps {
  title: string;
  leftBarButtonItems?: BarButtonItem[];
  rightBarButtonItems?: BarButtonItem[];
}

const Header = ({
  title,
  leftBarButtonItems,
  rightBarButtonItems,
}: HeaderProps) => {
  return (
    <header className="w-full h-14 px-6 grid grid-cols-5 items-center">
      <div>
        {leftBarButtonItems &&
          leftBarButtonItems.map((item) => (
            <button>
              {item.renderIcon({
                className: "text-base text-slate-500 font-regular",
              })}
            </button>
          ))}
      </div>

      <h1 className="col-span-3 text-lg text-center font-semibold text-slate-900">
        {title}
      </h1>

      {rightBarButtonItems &&
        rightBarButtonItems.map((item) => (
          <button>
            {item.renderIcon({
              className: "text-base text-slate-500 font-regular",
            })}
          </button>
        ))}
    </header>
  );
};

export default Header;
