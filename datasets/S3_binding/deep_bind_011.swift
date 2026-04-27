import SwiftUI

struct Granddb011: View {
    @Binding var n: Int
    var body: some View {
        Button("db011-deep") { n += 1 }
    }
}

struct Middb011: View {
    @Binding var n: Int
    var body: some View {
        Granddb011(n: $n)
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("db011-root: \(n)")
            Middb011(n: $n)
        }
        .padding()
    }
}
