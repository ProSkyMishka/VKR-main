import SwiftUI

struct ContentView: View {
    let items = ["li001-it1", "li001-it2", "li001-it3", "li001-it4", "li001-it5"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
