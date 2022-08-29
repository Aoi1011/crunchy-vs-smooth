import { Box, Button, Link, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/material/styles";
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";

const useStyles = makeStyles((theme: any) => ({
  button: {
    marginTop: theme.spacing(1),
    "&.hidden": {
      visibility: "hidden",
    },
  },
  connected: {
    color: green[500],
  },
  connectedBubble: {
    backgroundColor: green[500],
    height: 12,
    width: 12,
    borderRadius: "50%",
    marginRight: theme.spacing(0.5),
  },
  title: {
    fontWeight: 700,
  },
}));

interface IIntro {
  votes: any;
  initializeVoting: any;
  programID: any;
  voteAccount: any;
}

export default function Intro({
  votes,
  initializeVoting,
  programID,
  voteAccount,
}: IIntro) {
  const wallet = useWallet();
  // @ts-ignore
  const classes = useStyles();
  return (
    <Box textAlign="center">
      <Typography
        component="h1"
        variant="h3"
        gutterBottom
        className={classes.title}
      >
        Crunchy or Smooth?
      </Typography>
      <Typography variant="body1">
        It&apos;s time to settle an age old debate: What is the best kind of
        peanut butter?
      </Typography>
      <Typography variant="body1">
        Cast your vote to the{" "}
        <Link href="https://solana.com/" underline="always">
          Solana
        </Link>{" "}
        blockchain and help decide this once and for all!
      </Typography>
      <Box marginTop="8px">
        {wallet.connected ? (
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box className={classes.connectedBubble} />
            <Typography variant="body1" className={classes.connected}>
              Connected
            </Typography>
          </Box>
        ) : (
          <Typography variant="body1">
            To get started, connect your wallet below:
          </Typography>
        )}
        <WalletMultiButton
          className={
            wallet.connected
              ? [classes.button, "hidden"].join(" ")
              : classes.button
          }
        />
      </Box>
      {(typeof votes.crunchy !== "number" ||
        typeof votes.crunchy !== "number") &&
        wallet.connected && (
          <Box marginTop="8px">
            <Typography variant="body1">
              This{" "}
              <Link
                href={`https://explorer.solana.com/address/${programID.toString()}`}
                underline="always"
              >
                program
              </Link>
              {"'s "}
              <Link
                href={`https://explorer.solana.com/address/${voteAccount?.publicKey.toString()}`}
                underline="always"
              >
                vote account
              </Link>{" "}
              has not been initialized yet:
            </Typography>
            <Button
              color="primary"
              variant="contained"
              onClick={initializeVoting}
              className={classes.button}
            >
              Initialize Program
            </Button>
          </Box>
        )}
    </Box>
  );
}
