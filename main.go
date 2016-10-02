package main

import  (
	"net/http"
	"github.com/golangdaddy/gf"
	g "github.com/golangdaddy/gaml"
)

func main() {

	handlers := map[string]gf.GFHandler{
		"home": func (req *gf.Request) *gf.ResponseStatus {

			ele := g.HTML().Add(
				g.HEAD().Add(
					g.TITLE("MindpowerStore"),
				),
				g.BODY().Add(
					g.H(1, "Mindpower.store"),
				),
			)

			return gf.Respond(ele)

		},
	}

	root := gf.Router("mindpower", handlers)

	root.Run("home", "GET")

	panic(http.ListenAndServe(":8080", root.HttpRouter()))

}
