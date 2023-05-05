import { useState } from "react";
import { Alert, FlatList, View } from "react-native";

import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { NewTaskInput } from "../../components/NewTaskInput";
import { NoTaskMessage } from "../../components/NoTaskMessage";
import { TaskStatus } from "../../components/TaskStatus";

import { styles } from "./styles";

type Tasks = {
  task: string;
  checked: boolean;
};

export function Home() {
  const [newTask, setNewTask] = useState<Tasks>({ task: "", checked: false });
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const hasTask = tasks.length > 0;

  const concludedTasks = tasks.filter((task) => task.checked);

  function handleAddTask() {
    if (newTask.task.trim().length === 0) {
      Alert.alert("Descrição vazia!", "Digite a descrição da nova tarefa");
      return setNewTask({ task: "", checked: false });
    }

    setTasks([...tasks, newTask]);
    setNewTask({ task: "", checked: false });
  }

  function handleDeleteTask(deletedTask: string) {
    const tasksWithoutItem = tasks.filter((item) => item.task !== deletedTask);
    setTasks(tasksWithoutItem);
  }

  function handleCheckItem(checkedItem: string) {
    let updatedTasks = [...tasks];

    updatedTasks.forEach((item, index) => {
      if (item.task === checkedItem) {
        item.checked = !item.checked;
        updatedTasks.splice(index, 1, item);
      }
    });

    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />

      <View style={styles.container}>
        <View style={styles.content}>
          <NewTaskInput
            value={newTask.task}
            onChangeText={(text) => setNewTask({ task: text, checked: false })}
            onConfirm={handleAddTask}
          />

          <TaskStatus
            hasDivider={!hasTask}
            created={tasks.length}
            concluded={concludedTasks.length}
          />

          <FlatList
            data={tasks}
            keyExtractor={(item) => item.task}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
            renderItem={({ item }) => (
              <NewTask
                key={item.task}
                text={item.task}
                onDelete={() => handleDeleteTask(item.task)}
                onChecked={() => handleCheckItem(item.task)}
              />
            )}
            ListEmptyComponent={() => <NoTaskMessage />}
          />
        </View>
      </View>
    </>
  );
}
