import SwiftUI

struct ContentView: View {
    let items = ["li003-it1", "li003-it2", "li003-it3", "li003-it4", "li003-it5", "li003-it6", "li003-it7"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
