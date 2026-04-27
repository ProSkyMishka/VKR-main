import SwiftUI

struct ContentView: View {
    @State private var n = 0
    @State private var s = ""

    var body: some View {
        VStack {
            Text("ai005-n: \(n)")
            Text("ai005-s: " + s)
        }
        .onAppear {
            n = 105
            s = "ai005-name"
        }
    }
}
