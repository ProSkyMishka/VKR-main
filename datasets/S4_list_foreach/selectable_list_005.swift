import SwiftUI

struct ContentView: View {
    @State private var picked = "sl005-none"
    let items = ["sl005-alpha", "sl005-beta", "sl005-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl005-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
