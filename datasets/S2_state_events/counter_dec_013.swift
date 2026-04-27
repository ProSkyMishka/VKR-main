import SwiftUI

struct ContentView: View {
    @State private var n = 8

    var body: some View {
        VStack {
            Text("cd013-n: \(n)")
            Button("cd013-dec") { n -= 2 }
        }
        .padding()
    }
}
