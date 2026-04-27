import SwiftUI

struct ContentView: View {
    @State private var n = 7

    var body: some View {
        VStack {
            Text("cd012-n: \(n)")
            Button("cd012-dec") { n -= 1 }
        }
        .padding()
    }
}
