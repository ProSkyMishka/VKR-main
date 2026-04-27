import SwiftUI

struct ContentView: View {
    let items = ["li005-it1", "li005-it2", "li005-it3", "li005-it4", "li005-it5", "li005-it6", "li005-it7", "li005-it8", "li005-it9"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
