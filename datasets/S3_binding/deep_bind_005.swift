import SwiftUI

struct Granddb005: View {
    @Binding var n: Int
    var body: some View {
        Button("db005-deep") { n += 1 }
    }
}

struct Middb005: View {
    @Binding var n: Int
    var body: some View {
        Granddb005(n: $n)
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("db005-root: \(n)")
            Middb005(n: $n)
        }
        .padding()
    }
}
