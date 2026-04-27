import SwiftUI

struct ContentView: View {
    @State private var n = 0

    var body: some View {
        VStack {
            Text("rb003-val: \(n)")
            HStack {
                Button("rb003-plus") { n += 1 }
                Button("rb003-reset") { n = 0 }
            }
        }
        .padding()
    }
}
