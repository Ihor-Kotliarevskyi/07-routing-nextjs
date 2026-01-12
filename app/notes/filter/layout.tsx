type Props = {
  readonly children: React.ReactNode;
  readonly sidebar: React.ReactNode;
};

function NotesLayout({ children, sidebar }: Props) {
  return (
    <section>
      <aside>{sidebar}</aside>
      <div>{children}</div>
    </section>
  );
}

export default NotesLayout;
