import SwiftUI

struct ContentView: View {
    @State private var n = 0
    @State private var s = ""

    var body: some View {
        VStack {
            Text("ai011-n: \(n)")
            Text("ai011-s: " + s)
        }
        .onAppear {
            n = 111
            s = "ai011-name"
        }
    }
}
