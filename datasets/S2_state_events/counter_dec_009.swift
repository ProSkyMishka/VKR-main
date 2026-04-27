import SwiftUI

struct ContentView: View {
    @State private var n = 14

    var body: some View {
        VStack {
            Text("cd009-n: \(n)")
            Button("cd009-dec") { n -= 2 }
        }
        .padding()
    }
}
