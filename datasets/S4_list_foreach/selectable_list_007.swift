import SwiftUI

struct ContentView: View {
    @State private var picked = "sl007-none"
    let items = ["sl007-alpha", "sl007-beta", "sl007-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl007-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
