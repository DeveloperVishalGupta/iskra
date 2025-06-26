function LinkListComponent({ data, vertical = false }) {
  return (
    <div>
      <ul
        className={`${vertical ? 'flex-col' : ''} ml-2 flex justify-start gap-4`}
      >
        {data
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((item, index) => (
            <Link
              key={index}
              className="linkStyles({ color: 'foreground' }), 'data-[active=true]:text-primary data-[active=true]:font-medium'"
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
      </ul>
    </div>
  );
}

export default LinkListComponent;
