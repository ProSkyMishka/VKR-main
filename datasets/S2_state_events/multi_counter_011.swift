import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0

    var body: some View {
        VStack(spacing: 8) {
            Text("mc011-a: \(a)")
            Text("mc011-b: \(b)")
            Text("mc011-c: \(c)")
            HStack {
                Button("mc011-incA") { a += 1 }
                Button("mc011-incB") { b += 2 }
                Button("mc011-incC") { c += 3 }
            }
            HStack {
                Button("mc011-rstA") { a = 0 }
                Button("mc011-rstB") { b = 0 }
                Button("mc011-rstC") { c = 0 }
            }
        }
        .padding()
    }
}
