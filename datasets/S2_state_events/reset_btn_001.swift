import SwiftUI

struct ContentView: View {
    @State private var n = 0

    var body: some View {
        VStack {
            Text("rb001-val: \(n)")
            HStack {
                Button("rb001-plus") { n += 1 }
                Button("rb001-reset") { n = 0 }
            }
        }
        .padding()
    }
}
