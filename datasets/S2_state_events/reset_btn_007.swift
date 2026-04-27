import SwiftUI

struct ContentView: View {
    @State private var n = 0

    var body: some View {
        VStack {
            Text("rb007-val: \(n)")
            HStack {
                Button("rb007-plus") { n += 1 }
                Button("rb007-reset") { n = 0 }
            }
        }
        .padding()
    }
}
