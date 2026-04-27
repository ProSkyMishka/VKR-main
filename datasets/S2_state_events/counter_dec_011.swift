import SwiftUI

struct ContentView: View {
    @State private var n = 6

    var body: some View {
        VStack {
            Text("cd011-n: \(n)")
            Button("cd011-dec") { n -= 4 }
        }
        .padding()
    }
}
