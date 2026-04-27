import SwiftUI

struct ContentView: View {
    let items = ["li006-it1", "li006-it2", "li006-it3", "li006-it4"]
    var body: some View {
        List(items, id: \.self) { it in
            Text(it)
        }
    }
}
