import { Column, Container, H1 } from "./styled/styledCaseLinks";
import { moreWork } from "./caseLinksData";
import CaseLinks from "./caseLinks";

export const MoreWork = ({ filterOutID }) => {
  return (
    <>
      <Container>
        <H1>More work</H1>
        <Column>
          {moreWork
            .filter((i) => i.id !== filterOutID)
            .map(({ title, href, id, category }) => (
              <CaseLinks
                title={title}
                href={href}
                key={id}
                category={category}
              />
            ))}
        </Column>
      </Container>
    </>
  );
};
