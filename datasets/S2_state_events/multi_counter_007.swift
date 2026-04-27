import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0

    var body: some View {
        VStack(spacing: 8) {
            Text("mc007-a: \(a)")
            Text("mc007-b: \(b)")
            Text("mc007-c: \(c)")
            HStack {
                Button("mc007-incA") { a += 1 }
                Button("mc007-incB") { b += 2 }
                Button("mc007-incC") { c += 3 }
            }
            HStack {
                Button("mc007-rstA") { a = 0 }
                Button("mc007-rstB") { b = 0 }
                Button("mc007-rstC") { c = 0 }
            }
        }
        .padding()
    }
}
