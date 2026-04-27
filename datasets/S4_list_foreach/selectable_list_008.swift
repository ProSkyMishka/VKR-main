import SwiftUI

struct ContentView: View {
    @State private var picked = "sl008-none"
    let items = ["sl008-alpha", "sl008-beta", "sl008-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl008-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
