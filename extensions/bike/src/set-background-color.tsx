import { ActionPanel, List, Action, showHUD } from "@raycast/api";
import checkBikeInstalled from "./index";
import { setBikeBackgroundColor } from "./scripts";

const setBackgroundColor = async (color: string) => {
  await setBikeBackgroundColor(color);
  await showHUD("Set Bike Background Color");
};

export default function main() {
  const error_alert = checkBikeInstalled();
  if (error_alert !== undefined) {
    return error_alert;
  }

  return (
    <List>
      <List.Item
        title="Custom"
        actions={
          <ActionPanel>
            <Action
              title="Custom Background Color"
              onAction={async () => {
                await setBackgroundColor("choose color");
              }}
            />
          </ActionPanel>
        }
      />

      <List.Item
        title="White"
        actions={
          <ActionPanel>
            <Action
              title="White Background"
              onAction={async () => {
                await setBackgroundColor("{65535, 65535, 65535}");
              }}
            />
          </ActionPanel>
        }
      />

      <List.Item
        title="Black"
        actions={
          <ActionPanel>
            <Action
              title="Black Background"
              onAction={async () => {
                await setBackgroundColor("{0, 0, 0}");
              }}
            />
          </ActionPanel>
        }
      />

      <List.Item
        title="Red"
        actions={
          <ActionPanel>
            <Action
              title="Red Background"
              onAction={async () => {
                await setBackgroundColor("{32768, 0, 0}");
              }}
            />
          </ActionPanel>
        }
      />

      <List.Item
        title="Orange"
        actions={
          <ActionPanel>
            <Action
              title="Orange Background"
              onAction={async () => {
                await setBackgroundColor("{65535, 22768, 0}");
              }}
            />
          </ActionPanel>
        }
      />

      <List.Item
        title="Yellow"
        actions={
          <ActionPanel>
            <Action
              title="Yellow Background"
              onAction={async () => {
                await setBackgroundColor("{55535, 55535, 0}");
              }}
            />
          </ActionPanel>
        }
      />

      <List.Item
        title="Green"
        actions={
          <ActionPanel>
            <Action
              title="Green Background"
              onAction={async () => {
                await setBackgroundColor("{0, 32768, 0}");
              }}
            />
          </ActionPanel>
        }
      />

      <List.Item
        title="Teal"
        actions={
          <ActionPanel>
            <Action
              title="Teal Background"
              onAction={async () => {
                await setBackgroundColor("{0, 32768, 32768}");
              }}
            />
          </ActionPanel>
        }
      />

      <List.Item
        title="Blue"
        actions={
          <ActionPanel>
            <Action
              title="Blue Background"
              onAction={async () => {
                await setBackgroundColor("{0, 0, 65535}");
              }}
            />
          </ActionPanel>
        }
      />

      <List.Item
        title="Purple"
        actions={
          <ActionPanel>
            <Action
              title="Purple Background"
              onAction={async () => {
                await setBackgroundColor("{32768, 0, 32768}");
              }}
            />
          </ActionPanel>
        }
      />
    </List>
  );
}
