import { useAppContext } from '../context'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const UserCard = () => {

  const classes = useStyles();

  const { 
    userData
  } = useAppContext()

  return (
    <Card className={classes.root}>
      {userData.avatar_url && <CardHeader
        avatar={
          <Avatar alt="{userData.login}" src={userData.avatar_url} />
        }
        title={userData.login}
      />}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {userData.bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="primary" href={ `${userData.login}/repositories` }>
          Repositórios
        </Button>
        <Button variant="outlined" color="secondary" href={ `${userData.login}/starred` }>
          Favoritados
        </Button>
      </CardActions>
    </Card>
  )

}

export default UserCard;