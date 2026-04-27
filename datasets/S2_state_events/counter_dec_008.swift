import SwiftUI

struct ContentView: View {
    @State private var n = 13

    var body: some View {
        VStack {
            Text("cd008-n: \(n)")
            Button("cd008-dec") { n -= 1 }
        }
        .padding()
    }
}
