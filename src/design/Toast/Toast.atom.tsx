import { Notification, NotificationProps, Button, Paper, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { ReactNode, useState } from 'react';
import classes from './Toast.module.css';
import { ErrorIcon } from '../Icons/ErrorIcon';
import { SuccessIcon } from '../Icons/SuccessIcon';
import { WarningIcon } from '../Icons/WarningIcon';
import {IconChevronDown, IconChevronUp} from "@tabler/icons-react"

interface ToastProps extends NotificationProps {
  type?: 'success' | 'failure' | 'warning';
  title?: ReactNode | 'string';
  description?: ReactNode | 'string';
  details?: ReactNode | 'string';
  withCloseButton?: boolean;
  state?: "start" | "end"
}

export const Toast = ({
  type = 'success',
  description = '',
  title = '',
  details = '',
  state = "start",
  withCloseButton = false,
  ...props
}: ToastProps) => {
  const [openDetails, setOpenDetails] = useState(false);
  const theme = useMantineTheme();
  const {colorScheme} = useMantineColorScheme();

  const getIcon = (type: ToastProps['type']) => {
    switch (type) {
      case 'success':
        return <SuccessIcon />;

      case 'failure':
        return <ErrorIcon />;

      case 'warning':
        return <WarningIcon />;

      default:
        return <ErrorIcon />;
    }
  };

  const getIconClass = (type: ToastProps['type']) => {
    switch (type) {
      case 'success':
        return classes.successIcon;

      case 'failure':
        return classes.failureIcon;

      case 'warning':
        return classes.warningIcon;

      default:
        return classes.successIcon;
    }
  };

  const getRootClass = (type: ToastProps['type']) => {
    switch (type) {
      case 'success':
        return classes.successRoot;

      case 'failure':
        return classes.failureRoot;

      case 'warning':
        return classes.warningRoot;

      default:
        return classes.successRoot;
    }
  };


  return (
    <Notification
      data-state={state}
      withCloseButton={withCloseButton}
      withBorder
      title={title}
      radius={14}
      icon={getIcon(type)}
      classNames={{
        root: getRootClass(type),
        title: classes.title,
        description: classes.description,
        icon: getIconClass(type),
      }}
      {...props}
      style={{ width: 344, paddingTop: 14, paddingBottom: 14 }}
    >
      {description}

      {!!details && (
        <Button
          size="compact-xs"
          variant="default"
          style={{ fontWeight: 500, marginTop: 8, fontSize: 11, paddingLeft: 8, paddingRight: 8 }}
          onClick={() => {
            setOpenDetails((currentState) => !currentState);
          }}
          rightSection={
            !openDetails ? (
              <IconChevronDown size={14} style={{ marginLeft: '2px !important'}} />
            ) : (
              <IconChevronUp size={14} style={{ marginLeft: '2px !important' }} />
            )
          }
        >
          
          {openDetails ? 'Hide Details' : 'View Details'}

        
        
         

        </Button>
      )}
      {openDetails && (
        <Paper
          style={{
            borderRadius: theme.radius.xs,
            background: colorScheme === "light" ? theme.colors.background[1]: theme.colors.background[2],
            padding: "2px 8px",
            marginTop: theme.spacing.xs,
            fontSize: 10,
            fontWeight: 500,
            lineHeight: "13px",
            maxWidth: 200,
            color: colorScheme === "light" ? theme.colors.text[1] : theme.colors.text[2]
          }}
        >
          {details}
        </Paper>
      )}
    </Notification>
  );
};
