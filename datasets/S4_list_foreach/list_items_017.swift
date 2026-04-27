import SwiftUI

struct ContentView: View {
    let items = ["li017-it1", "li017-it2", "li017-it3", "li017-it4", "li017-it5", "li017-it6", "li017-it7", "li017-it8", "li017-it9"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
