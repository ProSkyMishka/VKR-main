import SwiftUI

struct ContentView: View {
    @State private var n = 6

    var body: some View {
        VStack {
            Text("cd001-n: \(n)")
            Button("cd001-dec") { n -= 2 }
        }
        .padding()
    }
}
