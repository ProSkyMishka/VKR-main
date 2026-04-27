import SwiftUI

struct ContentView: View {
    @State private var n = 0

    var body: some View {
        VStack {
            Text("rb014-val: \(n)")
            HStack {
                Button("rb014-plus") { n += 1 }
                Button("rb014-reset") { n = 0 }
            }
        }
        .padding()
    }
}
