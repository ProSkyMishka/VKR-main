import SwiftUI

struct ContentView: View {
    let items = ["li007-it1", "li007-it2", "li007-it3", "li007-it4", "li007-it5"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
