import SwiftUI

struct ContentView: View {
    @State private var n = 8

    var body: some View {
        VStack {
            Text("cd003-n: \(n)")
            Button("cd003-dec") { n -= 4 }
        }
        .padding()
    }
}
