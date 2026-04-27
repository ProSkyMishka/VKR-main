import SwiftUI

struct ContentView: View {
    let items = ["li004-it1", "li004-it2", "li004-it3", "li004-it4", "li004-it5", "li004-it6", "li004-it7", "li004-it8"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
