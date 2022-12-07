import React from 'react';
import {PageContainer, PageContentWrap, PageWrapper,} from './test-page.styles';
import PageContent from './page-content';
import useTestPage from "../../hooks/useTestPage";


const TestPage = () => {

  const {testSet, setTestSet} = useTestPage();

  return (
    <>
      {testSet &&
        <PageContainer>
          <PageWrapper>
            <PageContentWrap>
              <PageContent
                testSet={testSet}
                setTestSet={setTestSet}
                refsLength={testSet.lengths[0] + testSet.lengths[1] + testSet.lengths[3] + 1}
              />
            </PageContentWrap>
          </PageWrapper>
        </PageContainer>}
    </>
  );
};

export default TestPage;