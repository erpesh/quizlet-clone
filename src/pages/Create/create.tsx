import {FC, useState} from "react";
import setDataInterface from "../../interfaces/set-data.interface";
import CreateCard from "../../components/CreateCard/create-card";
import {addDoc, collection} from "firebase/firestore";
import {auth, db} from "../../firebase-config";
import {useNavigate} from "react-router-dom";
import {PageContainer} from "./create.styles";
import {BlueButton} from "../../components/BlueButton/blue-button.styles";
import {INITIAL_CREATE_STATE} from "./initial-state";
import Heading from "./Heading/heading";
import CreateTools from "./CreateTools/create-tools";
import ImportTerms from "../../components/ImportTerms/import-terms";
import AddCardButton from "./AddCardButton/add-card-button";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./styles.css";

const Create = () => {

  const navigate = useNavigate();
  const [data, setData] = useState<setDataInterface>(INITIAL_CREATE_STATE);
  const [isModalImportActive, setIsModalImportActive] = useState(false);

  const studySetsCollectionRef = collection(db, "studySets");

  const addStudySet = async () => {
    await addDoc(studySetsCollectionRef,
        {
          ...data,
          author:
              {
                id: auth.currentUser?.uid,
                name: auth.currentUser?.displayName
              }
        });
    navigate(`/${data.id}`)
  }

  const handleDrop = (droppedItem: any) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    let updatedList = [...data.terms];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setData({...data, terms: updatedList});
  };

  return (
      <PageContainer>
        <Heading data={data} setData={setData}/>
        <CreateTools data={data} setData={setData} setIsModalImportActive={setIsModalImportActive}/>
        <DragDropContext onDragEnd={handleDrop}>
          <Droppable droppableId={"cards-list"}>
            {provided => (
                <div
                    className={"cards-list"}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                  <TransitionGroup component={null}>
                    {data.terms.map((item, id) => (
                        <CSSTransition
                            key={item.id}
                            timeout={500}
                            classNames={"card"}
                        >
                          <Draggable draggableId={item.id.toString()} index={id}>
                            {provided => {
                              return <div
                                  className="item-container"
                                  ref={provided.innerRef}
                                  {...provided.dragHandleProps}
                                  {...provided.draggableProps}
                              >
                                <CreateCard
                                    id={id}
                                    data={data}
                                    setData={setData}
                                />
                              </div>
                            }}
                          </Draggable>
                        </CSSTransition>
                    ))}
                  </TransitionGroup>
                  {provided.placeholder}
                </div>
            )}
          </Droppable>
        </DragDropContext>
        <AddCardButton
            data={data}
            setData={setData}
        />
        <div style={{marginBottom: "0.875rem"}}>
          <div style={{float: "right"}}>
            <BlueButton
                padding={"1.25rem 2rem"}
                radius={"0.5rem"}
                fontSize={"1rem"}
            >
              Create
            </BlueButton>
          </div>
        </div>
        <ImportTerms
            data={data}
            setData={setData}
            isImportModalActive={isModalImportActive}
            setIsImportModalActive={setIsModalImportActive}/>
      </PageContainer>
  );
};

export default Create;