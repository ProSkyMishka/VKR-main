import SwiftUI

struct ContentView: View {
    let items = ["li016-it1", "li016-it2", "li016-it3", "li016-it4", "li016-it5", "li016-it6", "li016-it7", "li016-it8"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
