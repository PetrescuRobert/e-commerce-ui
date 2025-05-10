export default function AverageRating({avgRating}: { avgRating: number }) {

  const stars = Array.from({length: 5}, (_, i) =>
      Math.max(0, Math.min(1, avgRating - i)),
  ).filter(n => n !== 0);

  if (stars.length === 0) {
    return <p className={'text-sm text-muted-foreground'}>No ratings yet!</p>;
  }

  return (
      <div className={'flex gap-2 overflow-hidden text-2xl items-center'}>
        {stars.map((val, i) => (
            <div key={i}
                 className={'bg-clip-text text-transparent'}
                 style={{
                   background: `linear-gradient(90deg, #FFC633 ${val *
                   100}%, transparent ${val * 100}%)`,
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent',
                 }}>★</div>
        ))}
        <p className={'text-base'}>{avgRating}/<span
            className={'text-muted-foreground'}>5</span></p>
      </div>
  );
};