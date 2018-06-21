import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
//import StarBorderIcon from '@material-ui/icons/StarBorder';

class ListBooks extends React.Component {
      state = {
        shelfs: [],
        optionsdata: [
          {key:'move',value:'Move to...'},
          {key:'currentlyReading',value:'Currently Reading'},
          {key:'wantToRead',value:'Want to Read'},
          {key:'read',value:'Read'},
          {key:'none',value:'None'}
          ],
    }

    render(){
        const styles = theme => ({
          root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
          },
          gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
          },
          title: {
            color: theme.palette.primary.light,
          },
          titleBar: {
            background:
              'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
          },
        });

        //const { classes } = this.props;

        const{ books } = this.props
          console.log(books)
        if(books){
            this.state.shelfs.push(books.filter((book) => book.shelf === 'currentlyReading'))
            this.state.shelfs.push(books.filter((book) => book.shelf === 'wantToRead'))
            this.state.shelfs.push(books.filter((book) => book.shelf === 'read'))
            this.state.shelfs = this.state.shelfs.filter( (shelf) => shelf.length)
        }

        var teste = this.state.shelfs[0];
        console.log(teste)
        if(teste) {
        return(
            
            <div >
                <GridList  cols={2.5}>
                  {teste.map(tile => (
                    <GridListTile key={tile.imageLinks.smallThumbnail}>
                        <img src={tile.imageLinks.smallThumbnail} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            style={styles.titleBar}
                            // classes={{
                            //   root: classes.titleBar,
                            //   title: classes.title,
                            // }}

                            // actionIcon={
                            //   <IconButton>
                            //     <StarBorderIcon className={classes.title} />
                            //   </IconButton>
                            // }
                        />
                    </GridListTile>
                    ))}
                  </GridList>
              </div>
        
          //   <div className="bookshelf">
          //   <h2 className="bookshelf-title">Currently Reading</h2>
          //   <div className="bookshelf-books">
          //     <ol className="books-grid">
          //       <li>
          //         <div className="book">
          //           <div className="book-top">
          //             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
          //             <div className="book-shelf-changer">
          //               <select>
          //                 <option value="move" disabled>Move to...</option>
          //                 <option value="currentlyReading">Currently Reading</option>
          //                 <option value="wantToRead">Want to Read</option>
          //                 <option value="read">Read</option>
          //                 <option value="none">None</option>
          //               </select>
          //             </div>
          //           </div>
          //           <div className="book-title">To Kill a Mockingbird</div>
          //           <div className="book-authors">Harper Lee</div>
          //         </div>
          //       </li>
          //       <li>
          //         <div className="book">
          //           <div className="book-top">
          //             <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
          //             <div className="book-shelf-changer">
          //               <select>
          //                 <option value="move" disabled>Move to...</option>
          //                 <option value="currentlyReading">Currently Reading</option>
          //                 <option value="wantToRead">Want to Read</option>
          //                 <option value="read">Read</option>
          //                 <option value="none">None</option>
          //               </select>
          //             </div>
          //           </div>
          //           <div className="book-title">Ender's Game</div>
          //           <div className="book-authors">Orson Scott Card</div>
          //         </div>
          //       </li>
          //     </ol>
          //   </div>
          // </div>
        )
      }
      else return ''
    }
}

export default ListBooks