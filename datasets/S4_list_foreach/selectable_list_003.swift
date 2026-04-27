import SwiftUI

struct ContentView: View {
    @State private var picked = "sl003-none"
    let items = ["sl003-alpha", "sl003-beta", "sl003-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl003-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
