const resumeCss = `
body{
  font-family:system-ui;
  color: #44566c;
    font-family: 'Archivo', sans-serif;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.65;
}
.resume {
  max-width: 800px;
  margin: auto;
  background-color: white;
  min-height: 58.25rem;
  height: fit-content;
}
@media print {
  .resume {
     break-inside: avoid;
  }
}
.resume__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
}
.resume__header--left {
  font-size: 30px;
  font-weight: bold;
  border-left: 4px solid #333;
  display: flex;
  align-items: center;
  padding-left: 12px;
}
.resume__header--right {
  text-align: right;
}
.resume__section {
  display: flex;
  flex: 1 1 0%;
}
.resume__section:nth-of-type(1) hr {
  height: 0px;
  margin: 8px 0px;
}
.resume__section--left {
  padding: 0;
  display: flex;
  flex-direction: column;
  flex: 0.2 1 0%;
  padding-right: 1em;
  padding-top: 1em;
  font-weight: bold;
}
.resume__section--right {
  display: flex;
  flex-direction: column;
  flex: 0.8 1 0%;
}
.resume__section--right .right-item {
  display: flex;
  flex-direction: column;
}
.resume__section--right .right-item ul {
  //margin: 0px;
}
.resume__section--right .right-item__title {
  margin: 0;
  margin-top: 20px;
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 1.4em;
}
.resume__section--right .right-item__title:nth-of-type(1) {
  margin-top: 0px;
}
.resume__section--right .right-item__sub-title {
  font-size: 14px;
}
.resume__section--right .right-item__sub-title.date {
  color: #8697a8;
}
.resume__section--right .right-item__skills {
  margin: 0;
  display: flex;
  flex-direction: row;
  flex: 1 1;
  flex-wrap: wrap;
}
.resume__section--right .right-item__skills .skill {
  flex-basis: 44%;
  margin: 0 3%;
}
.resume__section--right hr {
  width: 100%;
  opacity: 0.2;
}
.resume__section--right li {
  list-style: square;
  line-height: 1.4rem;
}
.resume__section--right p {
  margin-top: 0px;
  margin-bottom: 0px;
}
a{
  text-decoration: none;
}
  ul {
    margin-top: 0px
  }
`;

export const getExportPDFResume = (): any => {
  const body = document.getElementById('cv');
  if (!body) {
    return null;
  }
  return {
    css: resumeCss,
    body: body.outerHTML,
    margin: {
      bottom: '5mm',
      top: '5mm',
      left: '5mm',
      right: '5mm',
    },
    title: 'Nguyen Dinh Thai',
  };
};
