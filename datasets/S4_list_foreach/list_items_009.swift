import SwiftUI

struct ContentView: View {
    let items = ["li009-it1", "li009-it2", "li009-it3", "li009-it4", "li009-it5", "li009-it6", "li009-it7"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
