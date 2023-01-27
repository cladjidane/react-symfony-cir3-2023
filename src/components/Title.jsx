const Title = ({ level, title }) => {
  if (level === 1)
    return (
      <div class="container px-4 text-center">
        <h1 class="fw-bolder">{title}</h1>
      </div>
    );
  else if (level === 2)
    return (
      <div class="container px-4 text-center">
        <h2 class="fw-bolder">{title}</h2>
      </div>
    );
};

export default Title;
