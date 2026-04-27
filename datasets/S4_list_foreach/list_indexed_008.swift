import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(1...13, id: \.self) { k in
                Text("lx008-row \(k)")
            }
        }
    }
}
