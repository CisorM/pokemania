export const BarsTransition = ({ animate }: { animate: boolean }) => {
  return (
    <article>
      <div className={`bars ${animate? 'show' : 'hide'}`}>
        <div className="w-full bg-bgRed z-[1000]" />
        <div className="w-full bg-bgBlack z-[1000]"  />
        <div className="w-full bg-bgRed z-[1000]" />
      </div>

      <div className={`${animate? 'absolute inset-0' : ''} bg-bgWhite z-[999] h-full w-full`}/>
    </article>
  );
};