import SwiftUI

struct Granddb008: View {
    @Binding var n: Int
    var body: some View {
        Button("db008-deep") { n += 1 }
    }
}

struct Middb008: View {
    @Binding var n: Int
    var body: some View {
        Granddb008(n: $n)
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("db008-root: \(n)")
            Middb008(n: $n)
        }
        .padding()
    }
}
