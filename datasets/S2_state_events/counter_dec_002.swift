import SwiftUI

struct ContentView: View {
    @State private var n = 7

    var body: some View {
        VStack {
            Text("cd002-n: \(n)")
            Button("cd002-dec") { n -= 3 }
        }
        .padding()
    }
}
